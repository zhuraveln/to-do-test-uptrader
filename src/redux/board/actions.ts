import { DropResult } from 'react-beautiful-dnd'
import {
  BoardItem,
  SubTaskItem,
  TaskItem
} from '../../components/Forms/FormCreateBoard/types'

import {
  CreateNewBoardAction,
  CreateNewTaskAction,
  BoardActionsTypes,
  ReorderTasksOnDragDropAction,
  SetCurrentBoardIndexAction,
  BoardState,
  SetCurrentTaskAction,
  UpdateTaskAction,
  CurrentTaskItem,
  CreateNewSubTaskAction,
  ChangeSubTaskStatusAction as ChangeSubTaskStatusAction
} from './types'

// Action for create a new Board
export const createNewBoard = (payload: BoardItem): CreateNewBoardAction => ({
  type: BoardActionsTypes.CREATE_NEW_BOARD,
  payload
})

// Action for create a new Task
export const createNewTask = (payload: TaskItem): CreateNewTaskAction => ({
  type: BoardActionsTypes.CREATE_NEW_TASK,
  payload
})

// Action for create a new Subtask
export const createNewSubTask = (
  payload: SubTaskItem
): CreateNewSubTaskAction => ({
  type: BoardActionsTypes.CREATE_NEW_SUBTASK,
  payload
})

// Action for change Subtask status
export const changeSubTaskStatus = (payload: {
  isComplete: boolean
  index: number
}): ChangeSubTaskStatusAction => ({
  type: BoardActionsTypes.CHANGE_SUBTASK_STATUS,
  payload
})

// Action for update current Task
export const updateTask = (payload: CurrentTaskItem): UpdateTaskAction => ({
  type: BoardActionsTypes.UPDATE_TASK,
  payload
})

// Action for set Current Board index
export const setCurrentBoardIndex = (
  payload: BoardState['currentBoardIndex']
): SetCurrentBoardIndexAction => ({
  type: BoardActionsTypes.SET_CURRENT_BOARD_INDEX,
  payload
})

// Action for set current Task
export const setCurrentTask = (
  payload: CurrentTaskItem
): SetCurrentTaskAction => ({
  type: BoardActionsTypes.SET_CURRENT_TASK,
  payload
})

// Action for reorder tasks by Drag and drop
export const reorderTasksOnDragDrop = (
  payload: DropResult
): ReorderTasksOnDragDropAction => ({
  type: BoardActionsTypes.REORDER_TASKS_ON_DRAG_DROP,
  payload
})
