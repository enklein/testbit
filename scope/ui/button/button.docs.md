---
labels: ['angular', 'typescript', 'button']
description: 'A `button` component.'
---

# Button documentation

Import `ButtonModule` into your application:

```ts
import { ButtonModule } from './button.module';

// add it to your module imports
@NgModule({
  imports: [
    ButtonModule
  ]
})
export class AppModule {}
```

Use `ButtonComponent` in your templates:

```html
<button></button>
```
