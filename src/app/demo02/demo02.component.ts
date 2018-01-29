import {Component} from '@angular/core'

//装饰器 decorator
@Component({
  //元数据 metaData
  selector:'demo02',
  //组件作为标签去调用时的名称 <demo02></demo02>
  template:`
    <ul>
     <myItem></myItem>
     <myItem></myItem>
     
    </ul>
  `
})

export class Demo02Component{

}