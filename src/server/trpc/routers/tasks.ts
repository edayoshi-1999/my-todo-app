import { router } from '../trpc';
import { getAll } from './getAll';
import { create } from './create';
import { update } from './update';
import { byId } from './byId';

export const tasksRouter = router({
  getAll,
  create,
  update,
  byId,
});