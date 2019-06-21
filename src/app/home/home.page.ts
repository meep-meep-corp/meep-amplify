import {Component} from '@angular/core';
import awsconfig from '../../aws-exports';
import {AmplifyService} from 'aws-amplify-angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  title = 'amplify-angular-app';
  url = 'https://console.aws.amazon.com/pinpoint/home/?region='
    + awsconfig.aws_project_region + '#/apps/'
    + awsconfig.aws_mobile_analytics_app_id + '/analytics/events';
  eventsSent = 0;
  analyticsEventSent = false;


  constructor(private amplifyService: AmplifyService) {
  }

  handleAnalyticsClick() {
    this.amplifyService.analytics().record('AWS Amplify Tutorial Event')
      .then((evt) => {
        ++this.eventsSent;
        this.analyticsEventSent = true;
      });
  }

}
