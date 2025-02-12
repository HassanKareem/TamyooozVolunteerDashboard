import { JoinRequestGateway } from './join-request.service';
import { PermissionGateway } from './permission.service';
import { Injectable } from '@angular/core';
import { RolesGateway } from './roles.service';
import { MetricGateway } from './metric.service';
import { EventGateway } from './event.service';
import { AdminGateway } from './admin.service';
import { UserGateway } from './user.service';
import { CategoryGateway } from './category.service';

@Injectable()
export class GatewayService {
    constructor(
        public permission: PermissionGateway,
        public role: RolesGateway,
        public joinRequest: JoinRequestGateway,
        public metric: MetricGateway,
        public event: EventGateway,
        public admin: AdminGateway,
        public User: UserGateway,
        public category: CategoryGateway,
    ) {}
}
