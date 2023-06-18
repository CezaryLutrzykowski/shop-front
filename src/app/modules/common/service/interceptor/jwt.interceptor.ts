import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {Observable} from "rxjs";
import {JwtService} from "../jwt.service";
import {Injectable} from "@angular/core";

@Injectable()
export class JwtInterceptor implements HttpInterceptor {

  constructor(private jwtService: JwtService) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let token = this.jwtService.getToken();
    if (req.url.startsWith("/api/admin") && token) {
      req = req.clone({
        headers: req.headers.set("Authorization", "Bearer " + token)
      });
    }
    return next.handle(req);
  }

}
