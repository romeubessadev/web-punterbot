import {Component, OnInit} from '@angular/core';
import {LoadingListener} from '../../services/loading-interceptor.service';

@Component({
  selector: 'app-loading-spinner',
  templateUrl: './loading-spinner.component.html',
  styleUrls: ['./loading-spinner.component.css']
})
export class LoadingSpinnerComponent implements OnInit {
  private _isLoading: boolean;

  constructor(private loadingListener: LoadingListener) {
  }

  ngOnInit(): void {
    this.loadingListener.loading().subscribe(value => {
      this._isLoading = value;
    });
  }

  get isLoading(): boolean {
    return this._isLoading;
  }
}
