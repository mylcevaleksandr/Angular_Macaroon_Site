import {Directive, ElementRef, HostBinding, HostListener, Input, OnInit, Renderer2} from '@angular/core';

@Directive({
  selector: '[ButtonDir]'
})
export class ButtonDirDirective implements OnInit {
  @Input() buttonDirDefaultBgColor: string = 'red '
  @Input() buttonDirBgColor: string = 'orange'

  constructor(private element: ElementRef,
              private rend: Renderer2) {
  }

  ngOnInit() {
    this.changeElBg(this.buttonDirDefaultBgColor)
  }

  private _backgroundColor: string = ''

  @HostBinding('style.backgroundColor')
  get getBgColor() {
    return this._backgroundColor
  }

  @HostListener('mouseover')
  onHover() {
    this.changeElBg(this.buttonDirBgColor)
  }

  @HostListener('mouseout')
  onBlur() {
    this.changeElBg(this.buttonDirDefaultBgColor)
  }

  changeElBg(color: string) {
    this._backgroundColor = color
    this.rend.setStyle(this.element.nativeElement, 'backgroundColor', color)
    this.rend.removeClass(this.element.nativeElement, 'btn-image')
  }
}
