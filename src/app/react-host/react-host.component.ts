// src/app/react-host/react-host.component.ts
import {
  Component,
  AfterViewInit,
  OnDestroy,
  ViewChild,
  ElementRef,
} from '@angular/core';
import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import { App as ReactApp } from '../react/App';

@Component({
  selector: 'app-react-host',
  standalone: true,
  template: `<div #reactContainer>Loading React app...</div>`,
})
export class ReactHostComponent implements AfterViewInit, OnDestroy {
  @ViewChild('reactContainer', { static: true })
  container!: ElementRef<HTMLDivElement>;
  private root!: ReactDOM.Root;

  ngAfterViewInit(): void {
    this.root = ReactDOM.createRoot(this.container.nativeElement);
    // Use React.createElement to render the ReactApp
    this.root.render(React.createElement(ReactApp));
  }

  ngOnDestroy(): void {
    if (this.root) {
      this.root.unmount();
    }
  }
}
