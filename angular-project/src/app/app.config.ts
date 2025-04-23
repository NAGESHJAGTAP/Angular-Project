import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { HttpClientModule } from '@angular/common/http'; // ✅ Add this
import { provideHttpClient } from '@angular/common/http'; // ✅ Optional better approach for Angular 15+

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideHttpClient() // ✅ Best way in latest Angular
  ],
  // ✅ If `provideHttpClient()` doesn't work in your version, then use this:
  // imports: [HttpClientModule]
};
