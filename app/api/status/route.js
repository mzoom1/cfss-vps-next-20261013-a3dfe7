export function GET() {
  return Response.json({ ok: true, framework: 'next-ssr', message: 'read-only fixture' });
}
