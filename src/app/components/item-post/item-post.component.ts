import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-item-post',
  templateUrl: './item-post.component.html',
  styleUrls: ['./item-post.component.css'],
})
export class ItemPostComponent implements OnInit {
  @Input() value: string;
  constructor() {}

  ngOnInit(): void {}
}
