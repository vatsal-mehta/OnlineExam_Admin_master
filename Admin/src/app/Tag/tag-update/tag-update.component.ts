import { Component, OnInit,Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

import { TagService} from '../../services/tag.service';
import {tag_class} from '../../classes/tag_class';
import { Router, ActivatedRoute } from '@angular/router';
import {TagHomeComponent} from '../tag-home/tag-home.component';
import {SubjectService } from '../../services/subject.service';
import {subject_class} from '../../classes/subject_class';

@Component({
  selector: 'app-tag-update',
  templateUrl: './tag-update.component.html',
  styleUrls: ['./tag-update.component.css']
})
export class TagUpdateComponent implements OnInit {
  Tag_id:number;
  tmp_subject_data:tag_class;
  Tag_arr:tag_class[];
  Name:string;
  Subject_id:number=0;
  flag:boolean=false;
  i:number;
  subject_list:subject_class[]=[];


  constructor(private _sub:SubjectService,private _ser:TagService,private _act:ActivatedRoute,private _router:Router,public dialogRef: MatDialogRef<TagHomeComponent>, @Inject(MAT_DIALOG_DATA) public data: any) {

   }
  ngOnInit() {

    this._sub.getAllSubject().subscribe((data:subject_class[])=>{
      this.subject_list=data;
    });

    this.flag=true;
    this.Tag_id=this._act.snapshot.params["id"];
    this.Tag_id=this.data.id;
    this._ser.getTopicById(this.Tag_id).subscribe(
      (data:tag_class[])=>
      {
        this.tmp_subject_data=data[0];
        this.Name=this.tmp_subject_data.Name;
        //console.log(this.Size_name);
      }
    );
  }

  onclickUpdate()
  {
    //console.log("xyz");
    if(this.flag==true)
    {
      this._ser.updateTag(new tag_class(this.Name,this.Subject_id),this.Tag_id).subscribe(
        (data:any)=>
        {

          if(data.errno==1062)
          {
            alert('Already in Your List');
          }
          else
          {
            console.log(data);
            alert("List updated");
          }

          this.dialogRef.close();
          this._router.navigate(['menu/tag_home']);
        }

      );
    }

  }

  onclickCancle()
  {
    this.flag=false;
    if(this.flag==false)
  {
    this.dialogRef.close();
    this._router.navigate(['menu/tag_home']);
  }
  }


}
