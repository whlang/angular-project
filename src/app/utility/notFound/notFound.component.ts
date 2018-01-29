import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'storeNotFount',
    template:`
      <h1>404 网页不跑了</h1>
      <button>返回主页</button>
    `
})

export class NotFoundComponent implements OnInit {
    constructor() { }

    ngOnInit() { }
}