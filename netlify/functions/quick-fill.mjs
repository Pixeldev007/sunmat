import { MongoClient } from 'mongodb';

const uri = process.env.MONGODB_URI; // e.g., mongodb+srv://user:pass@cluster.mongodb.net
const dbName = process.env.MONGODB_DB || 'sunmat';

let client;
let clientPromise;

async function getClient() {
  if (!uri) throw new Error('MONGODB_URI is not set');
  if (!clientPromise) {
    client = new MongoClient(uri, { serverSelectionTimeoutMS: 5000 });
    clientPromise = client.connect();
  }
  return clientPromise;
}

export async function handler(event) {
  try {
    if (event.httpMethod !== 'POST') {
      return { statusCode: 405, body: JSON.stringify({ error: 'Method Not Allowed' }) };
    }

    const contentType = event.headers['content-type'] || event.headers['Content-Type'] || '';
    if (!contentType.includes('application/json')) {
      return { statusCode: 400, body: JSON.stringify({ error: 'Expected application/json' }) };
    }

    const { phone, page } = JSON.parse(event.body || '{}');
    if (!phone || typeof phone !== 'string') {
      return { statusCode: 400, body: JSON.stringify({ error: 'phone is required' }) };
    }

    const isValid = /^\+?[0-9]{10,15}$/.test(phone.trim());
    if (!isValid) {
      return { statusCode: 400, body: JSON.stringify({ error: 'Invalid phone format' }) };
    }

    await getClient();
    const db = client.db(dbName);
    const leads = db.collection('leads');

    const trimmed = phone.trim();
    const res = await leads.updateOne(
      { phone: trimmed },
      { $setOnInsert: { phone: trimmed, page: page || 'Form2', created_at: new Date() } },
      { upsert: true }
    );

    return { statusCode: 200, body: JSON.stringify({ ok: true, upserted: !!res.upsertedId }) };
  } catch (err) {
    console.error('quick-fill error', err);
    return { statusCode: 500, body: JSON.stringify({ error: 'Server error' }) };
  }
}
