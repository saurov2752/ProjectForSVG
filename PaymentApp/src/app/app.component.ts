import { Component } from '@angular/core';
import { SvgTaskService } from './svg-task.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'PaymentApp';
  result: any = {};
  perimeter = 0;

  constructor(public svgTask: SvgTaskService, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.svgTask.getData().subscribe((res: any) => {
      debugger;
      this.result = res;
      this.perimeter = 2 * (res.width + res.height);
    })
  }

  updateData() {
    // console.log(oRectSvg);
    // console.log(oPointerSvg);
    var oUpdatedObj = {
      width: oRectSvg.x - 50,
      height: oRectSvg.y - 50,
      xAxis: oPointerSvg.x,
      yAxis: oPointerSvg.y
    }
    this.svgTask.updateData(oUpdatedObj).subscribe((res: any) => {
      this.toastr.success("Size of Rectangle Updated!");
      this.perimeter = 2 * (oUpdatedObj.width + oUpdatedObj.height);
    })

  }

}

var oRectSvg: any;
var oPointerSvg: any;
document.addEventListener('mousedown', mousedown, false);
function mousedown(e: any) {
  var target = e.target;
  if (target.id === 'pointerSvg') {
    oRectSvg = {
      x: e.clientX,
      y: e.clientY
    }
    document.addEventListener('mouseup', mouseup, false);
    document.addEventListener('mousemove', mousemove, false);
  }
}

function mousemove(e: any) {
  var current_points = {
    x: e.clientX,
    y: e.clientY
  }
  var rect: any = document.getElementById('rectSvg');
  var w = parseFloat(rect.getAttribute('width'));
  var h = parseFloat(rect.getAttribute('height'));
  var dx = current_points.x - oRectSvg.x;
  var dy = current_points.y - oRectSvg.y;
  w += dx;
  h += dy;
  rect.setAttribute('width', w);
  rect.setAttribute('height', h);
  oRectSvg = current_points;
  updateResizeIcon(dx, dy);
}

function updateResizeIcon(dx: any, dy: any) {
  var repoint: any = document.getElementById('pointerSvg');
  var x = parseFloat(repoint.getAttribute('x'));
  var y = parseFloat(repoint.getAttribute('y'));
  x += dx;
  y += dy;
  repoint.setAttribute('x', x);
  repoint.setAttribute('y', y);
  oPointerSvg = {
    x: x,
    y: y
  }
}

function mouseup(e: any) {
  document.removeEventListener('mouseup', mouseup, false);
  document.removeEventListener('mousemove', mousemove, false);
}
