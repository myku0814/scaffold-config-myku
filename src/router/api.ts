import express from 'express';
const router = express.Router();
router.get('/', (_req, res) => {
  res.json({msg: 'Scaffold Express Server develop by myku'});
});
export default router;
