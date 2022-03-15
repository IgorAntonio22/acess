import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { MatIconRegistry } from "@angular/material/icon";
import { DomSanitizer } from "@angular/platform-browser";

@Component({
  selector: 'app-cmp',
  templateUrl: './cmp.component.html',
  styleUrls: ['./cmp.component.css']
})
export class CmpComponent {

  @ViewChild('inputTarefa')
  ipt!: ElementRef

  tarefas: Array<string> = []
  

  add(valor: string): void { /* Método push, puxa a array */
    this.tarefas.push(valor)
    this.ipt.nativeElement.value = ''
  }

  remove(valor: string): void {
    this.tarefas.pop()
    this.ipt.nativeElement.value = ''
  }


  constructor(
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer
    ){
    this.matIconRegistry.addSvgIcon(
      "lixeira",
      this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/delete_white_24dp.svg")
    );
  }

}
