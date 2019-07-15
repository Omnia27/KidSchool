import { Component, OnInit } from '@angular/core';
declare var $:any;
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $(function () 
    {
       var scrollBtn=$("#scroll-top")
       $(window).scroll(function(){
       $(this).scrollTop ()>300?scrollBtn.show():scrollBtn.hide();
      });
     scrollBtn.click(function(){
      $("html,body").animate({ scrollTop:0})
      });
   });
  }

}
