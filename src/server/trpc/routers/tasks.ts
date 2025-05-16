import { router } from '../trpc';
import { getAll } from './getAll';
import { create } from './create';

export const tasksRouter = router({
  getAll,
  create,
});