import { Routes } from '@angular/router';
<<<<<<< HEAD
=======
import { Home } from './pages/home/home';
>>>>>>> dd0fde5 (first commit)
import { ConsumerWellnessComponent } from './pages/shop/consumer-wellness/consumer-wellness';
import { PersonalCareComponent } from './pages/shop/personal-care/personal-care';
import { SustainableLivingComponent } from './pages/shop/sustainable-living/sustainable-living';
import { TheScienceComponent } from './pages/institutions/The-Science/The-Science';
import { AgricultureComponent } from './pages/institutions/Agriculture/Agriculture';
import { PreventiveHealthcareComponent } from './pages/institutions/Preventive-Healthcare/Preventive-Healthcare';
import { DigitalComponent } from './pages/institutions/Digital/Digital';
import { RetreatsComponent } from './pages/experience/retreats/retreats.component';
import {TourismComponent} from './pages/experience/tourism/tourism.component';
export const routes: Routes = [
  {
    path: '',
<<<<<<< HEAD
    redirectTo: 'consumer-wellness',
    pathMatch: 'full'
  },
  {
=======
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: Home
  },
  {
>>>>>>> dd0fde5 (first commit)
    path: 'consumer-wellness',
    component: ConsumerWellnessComponent
  },
  {
     path: 'personal-care',
    component: PersonalCareComponent
  },
  {
    path: 'sustainable-living',
    component: SustainableLivingComponent
  },
  {
  path: 'The-Science',
  component: TheScienceComponent
  },

  {
    path: 'agriculture',
    component: AgricultureComponent
  },
  {
  path: 'preventive-healthcare',
  component: PreventiveHealthcareComponent
},{
  path: 'digital',
  component: DigitalComponent
},{
  path: 'retreats',
  component: RetreatsComponent
},{
  path: 'tourism',
  component: TourismComponent
<<<<<<< HEAD
}
];
=======
}];
>>>>>>> dd0fde5 (first commit)
