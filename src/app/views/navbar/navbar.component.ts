import { Component, OnInit } from '@angular/core';
declare var $:any;
@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})

export class NavbarComponent implements OnInit {
 
  constructor() { }

  ngOnInit() {
    $(function () 
    {
    $(".navbar-toggler").on("click",function()
       {
       $(".mobile-menu").toggleClass("open");
        $(".navbar-toggler span").toggleClass(function()
        {
           if($(".navbar-toggler span").hasClass("navbar-toggler-icon"))
             {
                 return $(".navbar-toggler span").removeClass("navbar-toggler-icon").text("x");
             }
            else
              {
                 return $(".navbar-toggler span").addClass("navbar-toggler-icon").text("");
              }
          })
       });
     });
  


    
  }

}
