
import app from './lib/app.js';
import pool from './lib/utils/pool.js';
import { uploadFile, getFileStream } from './s3.js';
import multer from 'multer';

const PORT = process.env.PORT || 7890;

const upload = multer({ dest: 'uploads/' })

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Started on ${PORT}`);
});

process.on('exit', () => {
  console.log('Goodbye!');
  pool.end();
});

app.get('/images/:key', (req, res) => {
  const key = req.params.key
  const readStream = getFileStream(key)

  readStream.pipe(res)
})

app.post('/images', upload.single('image'), async (req, res) => {
  const file = req.file
  console.log(file)
  const result = await uploadFile(file)
  const description = req.body.description
  res.send({ imagePath: `/images/${result.key}`)
});

app.listen(8080, () => console.log("Ello Gov'na, we're lis-ning on ort 8080"));