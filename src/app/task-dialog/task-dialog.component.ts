import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Task } from '../task/task'

export interface TaskDialogData{
  task: Partial<Task>;
  enableDelete: boolean;
}

export interface TaskDialogResult{
  task: Task;
  delete?: boolean;
}

@Component({
  selector: 'app-task-dialog',
  templateUrl: './task-dialog.component.html',
  styleUrls: ['./task-dialog.component.css']
})
export class TaskDialogComponent {
  private backupTask: Partial<Task> = {...this.data.task}

  constructor(
    private dialogRef: MatDialogRef<TaskDialogComponent>,
    @Inject( MAT_DIALOG_DATA) public data: TaskDialogData
  ) { }

  cancel(){
    this.data.task.title = this.backupTask.title;
    this.data.task.description = this.backupTask.description;
    this.dialogRef.close(this.data)
  }
}
