import { ClipboardModule } from 'ngx-clipboard'
import { MatButtonModule } from '@angular/material/button'
import { MatCardModule } from '@angular/material/card'
import { CountryMappingService } from './../Services/country-mapping.service'
import { CookieService, CookieModule } from 'ngx-cookie'
import { TranslateService, TranslateModule } from '@ngx-translate/core'
import { ChallengeService } from './../Services/challenge.service'
import { ConfigurationService } from './../Services/configuration.service'
import { HttpClientModule } from '@angular/common/http'
import { async, ComponentFixture, TestBed } from '@angular/core/testing'

import { ChallengeSolvedNotificationComponent } from './challenge-solved-notification.component'

class MockSocket {
  on (str: string, callback) {
    callback()
  }
}

describe('ChallengeSolvedNotificationComponent', () => {
  let component: ChallengeSolvedNotificationComponent
  let fixture: ComponentFixture<ChallengeSolvedNotificationComponent>
  let mockSocket

  beforeEach(async(() => {

    mockSocket = new MockSocket()

    TestBed.configureTestingModule({
      imports: [
        HttpClientModule,
        TranslateModule.forRoot(),
        CookieModule.forRoot(),
        ClipboardModule,
        MatCardModule,
        MatButtonModule
      ],
      declarations: [ ChallengeSolvedNotificationComponent ],
      providers: [
        ConfigurationService,
        ChallengeService,
        CountryMappingService,
        TranslateService,
        CookieService
      ]
    })
    .compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(ChallengeSolvedNotificationComponent)
    component = fixture.componentInstance
    expect(mockSocket).toBeTruthy()
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
