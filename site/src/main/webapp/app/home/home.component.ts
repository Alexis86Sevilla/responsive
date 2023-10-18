import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { AccountService } from 'app/core/auth/account.service';
import { Account } from 'app/core/auth/account.model';

@Component({
  selector: 'jhi-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit, OnDestroy {
  account: Account | null = null;

  content = [
    {
      title: "Evitar valores fijos",
      info: "Es crucial evitar el uso de valores fijos para el ancho y la altura de los elementos, ya que esto puede hacer que el diseño no se adapte correctamente a diferentes dispositivos. En su lugar, se deben usar unidades relativas como 'em' o 'rem'."
    },
    {
      title: "Metodología BEM",
      info: "El uso de esta metodología es fundamental para mantener un código CSS organizado y escalable. El uso de BEM facilita la lectura, uso y acceso de las clases en CSS y el posterior mantenimiento."
    },
    {
      title: "Accesibilidad",
      info: "Asegurarse de que el sitio sea usable por personas con discapacidades visuales, motoras o mayores es fundamental en el diseño moderno y dar un paso más en la igualdad de todas las personas."
    },
    {
      title: "Pruebas y optimización",
      info: "Es esencial destacar la importancia de probar y optimizar el diseño en diferentes dispositivos y navegadores. Las herramientas de desarrollo del navegador ayudan a simular diferentes pantallas y resoluciones. Otras herramientas como Responsively App."
    }
  ];

  private readonly destroy$ = new Subject<void>();

  constructor(private accountService: AccountService, private router: Router) {}

  ngOnInit(): void {
    this.accountService
      .getAuthenticationState()
      .pipe(takeUntil(this.destroy$))
      .subscribe(account => (this.account = account));
  }

  login(): void {
    this.router.navigate(['/login']);
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  
}
