import { Injectable, ForbiddenException } from '@nestjs/common';
import { HttpService, } from '@nestjs/axios';
import { AxiosResponse } from 'axios'
import { Observable, map, catchError } from 'rxjs';
import { useConfig } from '@hook';

@Injectable()
export class DiscoverService {
  constructor(private readonly httpService: HttpService) { }
  getMovie(param): Observable<AxiosResponse<any[]>> {
    const { url, params } = useConfig(param)
    return this.httpService.get(`${url}/discover/movie`, { params }).pipe(
      map((res) => res.data),
    )
      .pipe(
        catchError(() => {
          throw new ForbiddenException('API not available');
        }),
      );
  }
}
