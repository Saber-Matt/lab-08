export async function addImage(saved) {
  const response = await request
    .post('/api/saved')
    .send(saved)};