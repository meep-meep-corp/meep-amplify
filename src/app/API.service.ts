/* tslint:disable */
//  This file was automatically generated and should not be edited.
import { Injectable } from "@angular/core";
import API, { graphqlOperation } from "@aws-amplify/api";
import { GraphQLResult } from "@aws-amplify/api/lib/types";
import * as Observable from "zen-observable";

export type CreateVehicleInput = {
  id?: string | null;
  name: string;
  description?: string | null;
  location?: string | null;
  status: VehicleStatus;
  battery?: number | null;
  type?: string | null;
  url?: string | null;
  vehicleProviderId?: string | null;
};

export enum VehicleStatus {
  LOCKED = "LOCKED",
  AVAILABLE = "AVAILABLE",
  OUT_OF_SERVICE = "OUT_OF_SERVICE"
}

export type UpdateVehicleInput = {
  id: string;
  name?: string | null;
  description?: string | null;
  location?: string | null;
  status?: VehicleStatus | null;
  battery?: number | null;
  type?: string | null;
  url?: string | null;
  vehicleProviderId?: string | null;
};

export type DeleteVehicleInput = {
  id?: string | null;
};

export type CreateProviderInput = {
  id?: string | null;
  name: string;
  description?: string | null;
};

export type UpdateProviderInput = {
  id: string;
  name?: string | null;
  description?: string | null;
};

export type DeleteProviderInput = {
  id?: string | null;
};

export type CreateUserInput = {
  id?: string | null;
  name: string;
  email: string;
};

export type UpdateUserInput = {
  id: string;
  name?: string | null;
  email?: string | null;
};

export type DeleteUserInput = {
  id?: string | null;
};

export type CreateTripInput = {
  id?: string | null;
  cost: number;
  startCoords?: string | null;
  endCoords?: string | null;
  startTime?: string | null;
  endTime?: string | null;
  tripUserId?: string | null;
  tripVehicleId?: string | null;
};

export type UpdateTripInput = {
  id: string;
  cost?: number | null;
  startCoords?: string | null;
  endCoords?: string | null;
  startTime?: string | null;
  endTime?: string | null;
  tripUserId?: string | null;
  tripVehicleId?: string | null;
};

export type DeleteTripInput = {
  id?: string | null;
};

export type ModelVehicleFilterInput = {
  id?: ModelIDFilterInput | null;
  name?: ModelStringFilterInput | null;
  description?: ModelStringFilterInput | null;
  location?: ModelStringFilterInput | null;
  status?: ModelVehicleStatusFilterInput | null;
  battery?: ModelIntFilterInput | null;
  type?: ModelStringFilterInput | null;
  url?: ModelStringFilterInput | null;
  and?: Array<ModelVehicleFilterInput | null> | null;
  or?: Array<ModelVehicleFilterInput | null> | null;
  not?: ModelVehicleFilterInput | null;
};

export type ModelIDFilterInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
};

export type ModelStringFilterInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
};

export type ModelVehicleStatusFilterInput = {
  eq?: VehicleStatus | null;
  ne?: VehicleStatus | null;
};

export type ModelIntFilterInput = {
  ne?: number | null;
  eq?: number | null;
  le?: number | null;
  lt?: number | null;
  ge?: number | null;
  gt?: number | null;
  contains?: number | null;
  notContains?: number | null;
  between?: Array<number | null> | null;
};

export type ModelProviderFilterInput = {
  id?: ModelIDFilterInput | null;
  name?: ModelStringFilterInput | null;
  description?: ModelStringFilterInput | null;
  and?: Array<ModelProviderFilterInput | null> | null;
  or?: Array<ModelProviderFilterInput | null> | null;
  not?: ModelProviderFilterInput | null;
};

export type ModelUserFilterInput = {
  id?: ModelIDFilterInput | null;
  name?: ModelStringFilterInput | null;
  email?: ModelStringFilterInput | null;
  and?: Array<ModelUserFilterInput | null> | null;
  or?: Array<ModelUserFilterInput | null> | null;
  not?: ModelUserFilterInput | null;
};

export type ModelTripFilterInput = {
  id?: ModelIDFilterInput | null;
  cost?: ModelIntFilterInput | null;
  startCoords?: ModelStringFilterInput | null;
  endCoords?: ModelStringFilterInput | null;
  startTime?: ModelStringFilterInput | null;
  endTime?: ModelStringFilterInput | null;
  and?: Array<ModelTripFilterInput | null> | null;
  or?: Array<ModelTripFilterInput | null> | null;
  not?: ModelTripFilterInput | null;
};

export type CreateVehicleMutation = {
  __typename: "Vehicle";
  id: string;
  name: string;
  description: string | null;
  location: string | null;
  status: VehicleStatus;
  battery: number | null;
  provider: {
    __typename: "Provider";
    id: string;
    name: string;
    description: string | null;
    vehicles: {
      __typename: "ModelVehicleConnection";
      nextToken: string | null;
    } | null;
  } | null;
  trips: {
    __typename: "ModelTripConnection";
    items: Array<{
      __typename: "Trip";
      id: string;
      cost: number;
      startCoords: string | null;
      endCoords: string | null;
      startTime: string | null;
      endTime: string | null;
    } | null> | null;
    nextToken: string | null;
  } | null;
  type: string | null;
  url: string | null;
};

export type UpdateVehicleMutation = {
  __typename: "Vehicle";
  id: string;
  name: string;
  description: string | null;
  location: string | null;
  status: VehicleStatus;
  battery: number | null;
  provider: {
    __typename: "Provider";
    id: string;
    name: string;
    description: string | null;
    vehicles: {
      __typename: "ModelVehicleConnection";
      nextToken: string | null;
    } | null;
  } | null;
  trips: {
    __typename: "ModelTripConnection";
    items: Array<{
      __typename: "Trip";
      id: string;
      cost: number;
      startCoords: string | null;
      endCoords: string | null;
      startTime: string | null;
      endTime: string | null;
    } | null> | null;
    nextToken: string | null;
  } | null;
  type: string | null;
  url: string | null;
};

export type DeleteVehicleMutation = {
  __typename: "Vehicle";
  id: string;
  name: string;
  description: string | null;
  location: string | null;
  status: VehicleStatus;
  battery: number | null;
  provider: {
    __typename: "Provider";
    id: string;
    name: string;
    description: string | null;
    vehicles: {
      __typename: "ModelVehicleConnection";
      nextToken: string | null;
    } | null;
  } | null;
  trips: {
    __typename: "ModelTripConnection";
    items: Array<{
      __typename: "Trip";
      id: string;
      cost: number;
      startCoords: string | null;
      endCoords: string | null;
      startTime: string | null;
      endTime: string | null;
    } | null> | null;
    nextToken: string | null;
  } | null;
  type: string | null;
  url: string | null;
};

export type CreateProviderMutation = {
  __typename: "Provider";
  id: string;
  name: string;
  description: string | null;
  vehicles: {
    __typename: "ModelVehicleConnection";
    items: Array<{
      __typename: "Vehicle";
      id: string;
      name: string;
      description: string | null;
      location: string | null;
      status: VehicleStatus;
      battery: number | null;
      type: string | null;
      url: string | null;
    } | null> | null;
    nextToken: string | null;
  } | null;
};

export type UpdateProviderMutation = {
  __typename: "Provider";
  id: string;
  name: string;
  description: string | null;
  vehicles: {
    __typename: "ModelVehicleConnection";
    items: Array<{
      __typename: "Vehicle";
      id: string;
      name: string;
      description: string | null;
      location: string | null;
      status: VehicleStatus;
      battery: number | null;
      type: string | null;
      url: string | null;
    } | null> | null;
    nextToken: string | null;
  } | null;
};

export type DeleteProviderMutation = {
  __typename: "Provider";
  id: string;
  name: string;
  description: string | null;
  vehicles: {
    __typename: "ModelVehicleConnection";
    items: Array<{
      __typename: "Vehicle";
      id: string;
      name: string;
      description: string | null;
      location: string | null;
      status: VehicleStatus;
      battery: number | null;
      type: string | null;
      url: string | null;
    } | null> | null;
    nextToken: string | null;
  } | null;
};

export type CreateUserMutation = {
  __typename: "User";
  id: string;
  name: string;
  email: string;
  trips: {
    __typename: "ModelTripConnection";
    items: Array<{
      __typename: "Trip";
      id: string;
      cost: number;
      startCoords: string | null;
      endCoords: string | null;
      startTime: string | null;
      endTime: string | null;
    } | null> | null;
    nextToken: string | null;
  } | null;
};

export type UpdateUserMutation = {
  __typename: "User";
  id: string;
  name: string;
  email: string;
  trips: {
    __typename: "ModelTripConnection";
    items: Array<{
      __typename: "Trip";
      id: string;
      cost: number;
      startCoords: string | null;
      endCoords: string | null;
      startTime: string | null;
      endTime: string | null;
    } | null> | null;
    nextToken: string | null;
  } | null;
};

export type DeleteUserMutation = {
  __typename: "User";
  id: string;
  name: string;
  email: string;
  trips: {
    __typename: "ModelTripConnection";
    items: Array<{
      __typename: "Trip";
      id: string;
      cost: number;
      startCoords: string | null;
      endCoords: string | null;
      startTime: string | null;
      endTime: string | null;
    } | null> | null;
    nextToken: string | null;
  } | null;
};

export type CreateTripMutation = {
  __typename: "Trip";
  id: string;
  user: {
    __typename: "User";
    id: string;
    name: string;
    email: string;
    trips: {
      __typename: "ModelTripConnection";
      nextToken: string | null;
    } | null;
  } | null;
  vehicle: {
    __typename: "Vehicle";
    id: string;
    name: string;
    description: string | null;
    location: string | null;
    status: VehicleStatus;
    battery: number | null;
    provider: {
      __typename: "Provider";
      id: string;
      name: string;
      description: string | null;
    } | null;
    trips: {
      __typename: "ModelTripConnection";
      nextToken: string | null;
    } | null;
    type: string | null;
    url: string | null;
  } | null;
  cost: number;
  startCoords: string | null;
  endCoords: string | null;
  startTime: string | null;
  endTime: string | null;
};

export type UpdateTripMutation = {
  __typename: "Trip";
  id: string;
  user: {
    __typename: "User";
    id: string;
    name: string;
    email: string;
    trips: {
      __typename: "ModelTripConnection";
      nextToken: string | null;
    } | null;
  } | null;
  vehicle: {
    __typename: "Vehicle";
    id: string;
    name: string;
    description: string | null;
    location: string | null;
    status: VehicleStatus;
    battery: number | null;
    provider: {
      __typename: "Provider";
      id: string;
      name: string;
      description: string | null;
    } | null;
    trips: {
      __typename: "ModelTripConnection";
      nextToken: string | null;
    } | null;
    type: string | null;
    url: string | null;
  } | null;
  cost: number;
  startCoords: string | null;
  endCoords: string | null;
  startTime: string | null;
  endTime: string | null;
};

export type DeleteTripMutation = {
  __typename: "Trip";
  id: string;
  user: {
    __typename: "User";
    id: string;
    name: string;
    email: string;
    trips: {
      __typename: "ModelTripConnection";
      nextToken: string | null;
    } | null;
  } | null;
  vehicle: {
    __typename: "Vehicle";
    id: string;
    name: string;
    description: string | null;
    location: string | null;
    status: VehicleStatus;
    battery: number | null;
    provider: {
      __typename: "Provider";
      id: string;
      name: string;
      description: string | null;
    } | null;
    trips: {
      __typename: "ModelTripConnection";
      nextToken: string | null;
    } | null;
    type: string | null;
    url: string | null;
  } | null;
  cost: number;
  startCoords: string | null;
  endCoords: string | null;
  startTime: string | null;
  endTime: string | null;
};

export type GetVehicleQuery = {
  __typename: "Vehicle";
  id: string;
  name: string;
  description: string | null;
  location: string | null;
  status: VehicleStatus;
  battery: number | null;
  provider: {
    __typename: "Provider";
    id: string;
    name: string;
    description: string | null;
    vehicles: {
      __typename: "ModelVehicleConnection";
      nextToken: string | null;
    } | null;
  } | null;
  trips: {
    __typename: "ModelTripConnection";
    items: Array<{
      __typename: "Trip";
      id: string;
      cost: number;
      startCoords: string | null;
      endCoords: string | null;
      startTime: string | null;
      endTime: string | null;
    } | null> | null;
    nextToken: string | null;
  } | null;
  type: string | null;
  url: string | null;
};

export type ListVehiclesQuery = {
  __typename: "ModelVehicleConnection";
  items: Array<{
    __typename: "Vehicle";
    id: string;
    name: string;
    description: string | null;
    location: string | null;
    status: VehicleStatus;
    battery: number | null;
    provider: {
      __typename: "Provider";
      id: string;
      name: string;
      description: string | null;
    } | null;
    trips: {
      __typename: "ModelTripConnection";
      nextToken: string | null;
    } | null;
    type: string | null;
    url: string | null;
  } | null> | null;
  nextToken: string | null;
};

export type GetProviderQuery = {
  __typename: "Provider";
  id: string;
  name: string;
  description: string | null;
  vehicles: {
    __typename: "ModelVehicleConnection";
    items: Array<{
      __typename: "Vehicle";
      id: string;
      name: string;
      description: string | null;
      location: string | null;
      status: VehicleStatus;
      battery: number | null;
      type: string | null;
      url: string | null;
    } | null> | null;
    nextToken: string | null;
  } | null;
};

export type ListProvidersQuery = {
  __typename: "ModelProviderConnection";
  items: Array<{
    __typename: "Provider";
    id: string;
    name: string;
    description: string | null;
    vehicles: {
      __typename: "ModelVehicleConnection";
      nextToken: string | null;
    } | null;
  } | null> | null;
  nextToken: string | null;
};

export type GetUserQuery = {
  __typename: "User";
  id: string;
  name: string;
  email: string;
  trips: {
    __typename: "ModelTripConnection";
    items: Array<{
      __typename: "Trip";
      id: string;
      cost: number;
      startCoords: string | null;
      endCoords: string | null;
      startTime: string | null;
      endTime: string | null;
    } | null> | null;
    nextToken: string | null;
  } | null;
};

export type ListUsersQuery = {
  __typename: "ModelUserConnection";
  items: Array<{
    __typename: "User";
    id: string;
    name: string;
    email: string;
    trips: {
      __typename: "ModelTripConnection";
      nextToken: string | null;
    } | null;
  } | null> | null;
  nextToken: string | null;
};

export type GetTripQuery = {
  __typename: "Trip";
  id: string;
  user: {
    __typename: "User";
    id: string;
    name: string;
    email: string;
    trips: {
      __typename: "ModelTripConnection";
      nextToken: string | null;
    } | null;
  } | null;
  vehicle: {
    __typename: "Vehicle";
    id: string;
    name: string;
    description: string | null;
    location: string | null;
    status: VehicleStatus;
    battery: number | null;
    provider: {
      __typename: "Provider";
      id: string;
      name: string;
      description: string | null;
    } | null;
    trips: {
      __typename: "ModelTripConnection";
      nextToken: string | null;
    } | null;
    type: string | null;
    url: string | null;
  } | null;
  cost: number;
  startCoords: string | null;
  endCoords: string | null;
  startTime: string | null;
  endTime: string | null;
};

export type ListTripsQuery = {
  __typename: "ModelTripConnection";
  items: Array<{
    __typename: "Trip";
    id: string;
    user: {
      __typename: "User";
      id: string;
      name: string;
      email: string;
    } | null;
    vehicle: {
      __typename: "Vehicle";
      id: string;
      name: string;
      description: string | null;
      location: string | null;
      status: VehicleStatus;
      battery: number | null;
      type: string | null;
      url: string | null;
    } | null;
    cost: number;
    startCoords: string | null;
    endCoords: string | null;
    startTime: string | null;
    endTime: string | null;
  } | null> | null;
  nextToken: string | null;
};

export type UserByEmailQuery = {
  __typename: "ModelUserConnection";
  items: Array<{
    __typename: "User";
    id: string;
    name: string;
    email: string;
    trips: {
      __typename: "ModelTripConnection";
      nextToken: string | null;
    } | null;
  } | null> | null;
  nextToken: string | null;
};

export type OnCreateVehicleSubscription = {
  __typename: "Vehicle";
  id: string;
  name: string;
  description: string | null;
  location: string | null;
  status: VehicleStatus;
  battery: number | null;
  provider: {
    __typename: "Provider";
    id: string;
    name: string;
    description: string | null;
    vehicles: {
      __typename: "ModelVehicleConnection";
      nextToken: string | null;
    } | null;
  } | null;
  trips: {
    __typename: "ModelTripConnection";
    items: Array<{
      __typename: "Trip";
      id: string;
      cost: number;
      startCoords: string | null;
      endCoords: string | null;
      startTime: string | null;
      endTime: string | null;
    } | null> | null;
    nextToken: string | null;
  } | null;
  type: string | null;
  url: string | null;
};

export type OnUpdateVehicleSubscription = {
  __typename: "Vehicle";
  id: string;
  name: string;
  description: string | null;
  location: string | null;
  status: VehicleStatus;
  battery: number | null;
  provider: {
    __typename: "Provider";
    id: string;
    name: string;
    description: string | null;
    vehicles: {
      __typename: "ModelVehicleConnection";
      nextToken: string | null;
    } | null;
  } | null;
  trips: {
    __typename: "ModelTripConnection";
    items: Array<{
      __typename: "Trip";
      id: string;
      cost: number;
      startCoords: string | null;
      endCoords: string | null;
      startTime: string | null;
      endTime: string | null;
    } | null> | null;
    nextToken: string | null;
  } | null;
  type: string | null;
  url: string | null;
};

export type OnDeleteVehicleSubscription = {
  __typename: "Vehicle";
  id: string;
  name: string;
  description: string | null;
  location: string | null;
  status: VehicleStatus;
  battery: number | null;
  provider: {
    __typename: "Provider";
    id: string;
    name: string;
    description: string | null;
    vehicles: {
      __typename: "ModelVehicleConnection";
      nextToken: string | null;
    } | null;
  } | null;
  trips: {
    __typename: "ModelTripConnection";
    items: Array<{
      __typename: "Trip";
      id: string;
      cost: number;
      startCoords: string | null;
      endCoords: string | null;
      startTime: string | null;
      endTime: string | null;
    } | null> | null;
    nextToken: string | null;
  } | null;
  type: string | null;
  url: string | null;
};

export type OnCreateProviderSubscription = {
  __typename: "Provider";
  id: string;
  name: string;
  description: string | null;
  vehicles: {
    __typename: "ModelVehicleConnection";
    items: Array<{
      __typename: "Vehicle";
      id: string;
      name: string;
      description: string | null;
      location: string | null;
      status: VehicleStatus;
      battery: number | null;
      type: string | null;
      url: string | null;
    } | null> | null;
    nextToken: string | null;
  } | null;
};

export type OnUpdateProviderSubscription = {
  __typename: "Provider";
  id: string;
  name: string;
  description: string | null;
  vehicles: {
    __typename: "ModelVehicleConnection";
    items: Array<{
      __typename: "Vehicle";
      id: string;
      name: string;
      description: string | null;
      location: string | null;
      status: VehicleStatus;
      battery: number | null;
      type: string | null;
      url: string | null;
    } | null> | null;
    nextToken: string | null;
  } | null;
};

export type OnDeleteProviderSubscription = {
  __typename: "Provider";
  id: string;
  name: string;
  description: string | null;
  vehicles: {
    __typename: "ModelVehicleConnection";
    items: Array<{
      __typename: "Vehicle";
      id: string;
      name: string;
      description: string | null;
      location: string | null;
      status: VehicleStatus;
      battery: number | null;
      type: string | null;
      url: string | null;
    } | null> | null;
    nextToken: string | null;
  } | null;
};

export type OnCreateUserSubscription = {
  __typename: "User";
  id: string;
  name: string;
  email: string;
  trips: {
    __typename: "ModelTripConnection";
    items: Array<{
      __typename: "Trip";
      id: string;
      cost: number;
      startCoords: string | null;
      endCoords: string | null;
      startTime: string | null;
      endTime: string | null;
    } | null> | null;
    nextToken: string | null;
  } | null;
};

export type OnUpdateUserSubscription = {
  __typename: "User";
  id: string;
  name: string;
  email: string;
  trips: {
    __typename: "ModelTripConnection";
    items: Array<{
      __typename: "Trip";
      id: string;
      cost: number;
      startCoords: string | null;
      endCoords: string | null;
      startTime: string | null;
      endTime: string | null;
    } | null> | null;
    nextToken: string | null;
  } | null;
};

export type OnDeleteUserSubscription = {
  __typename: "User";
  id: string;
  name: string;
  email: string;
  trips: {
    __typename: "ModelTripConnection";
    items: Array<{
      __typename: "Trip";
      id: string;
      cost: number;
      startCoords: string | null;
      endCoords: string | null;
      startTime: string | null;
      endTime: string | null;
    } | null> | null;
    nextToken: string | null;
  } | null;
};

export type OnCreateTripSubscription = {
  __typename: "Trip";
  id: string;
  user: {
    __typename: "User";
    id: string;
    name: string;
    email: string;
    trips: {
      __typename: "ModelTripConnection";
      nextToken: string | null;
    } | null;
  } | null;
  vehicle: {
    __typename: "Vehicle";
    id: string;
    name: string;
    description: string | null;
    location: string | null;
    status: VehicleStatus;
    battery: number | null;
    provider: {
      __typename: "Provider";
      id: string;
      name: string;
      description: string | null;
    } | null;
    trips: {
      __typename: "ModelTripConnection";
      nextToken: string | null;
    } | null;
    type: string | null;
    url: string | null;
  } | null;
  cost: number;
  startCoords: string | null;
  endCoords: string | null;
  startTime: string | null;
  endTime: string | null;
};

export type OnUpdateTripSubscription = {
  __typename: "Trip";
  id: string;
  user: {
    __typename: "User";
    id: string;
    name: string;
    email: string;
    trips: {
      __typename: "ModelTripConnection";
      nextToken: string | null;
    } | null;
  } | null;
  vehicle: {
    __typename: "Vehicle";
    id: string;
    name: string;
    description: string | null;
    location: string | null;
    status: VehicleStatus;
    battery: number | null;
    provider: {
      __typename: "Provider";
      id: string;
      name: string;
      description: string | null;
    } | null;
    trips: {
      __typename: "ModelTripConnection";
      nextToken: string | null;
    } | null;
    type: string | null;
    url: string | null;
  } | null;
  cost: number;
  startCoords: string | null;
  endCoords: string | null;
  startTime: string | null;
  endTime: string | null;
};

export type OnDeleteTripSubscription = {
  __typename: "Trip";
  id: string;
  user: {
    __typename: "User";
    id: string;
    name: string;
    email: string;
    trips: {
      __typename: "ModelTripConnection";
      nextToken: string | null;
    } | null;
  } | null;
  vehicle: {
    __typename: "Vehicle";
    id: string;
    name: string;
    description: string | null;
    location: string | null;
    status: VehicleStatus;
    battery: number | null;
    provider: {
      __typename: "Provider";
      id: string;
      name: string;
      description: string | null;
    } | null;
    trips: {
      __typename: "ModelTripConnection";
      nextToken: string | null;
    } | null;
    type: string | null;
    url: string | null;
  } | null;
  cost: number;
  startCoords: string | null;
  endCoords: string | null;
  startTime: string | null;
  endTime: string | null;
};

@Injectable({
  providedIn: "root"
})
export class APIService {
  async CreateVehicle(
    input: CreateVehicleInput
  ): Promise<CreateVehicleMutation> {
    const statement = `mutation CreateVehicle($input: CreateVehicleInput!) {
        createVehicle(input: $input) {
          __typename
          id
          name
          description
          location
          status
          battery
          provider {
            __typename
            id
            name
            description
            vehicles {
              __typename
              nextToken
            }
          }
          trips {
            __typename
            items {
              __typename
              id
              cost
              startCoords
              endCoords
              startTime
              endTime
            }
            nextToken
          }
          type
          url
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateVehicleMutation>response.data.createVehicle;
  }
  async UpdateVehicle(
    input: UpdateVehicleInput
  ): Promise<UpdateVehicleMutation> {
    const statement = `mutation UpdateVehicle($input: UpdateVehicleInput!) {
        updateVehicle(input: $input) {
          __typename
          id
          name
          description
          location
          status
          battery
          provider {
            __typename
            id
            name
            description
            vehicles {
              __typename
              nextToken
            }
          }
          trips {
            __typename
            items {
              __typename
              id
              cost
              startCoords
              endCoords
              startTime
              endTime
            }
            nextToken
          }
          type
          url
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateVehicleMutation>response.data.updateVehicle;
  }
  async DeleteVehicle(
    input: DeleteVehicleInput
  ): Promise<DeleteVehicleMutation> {
    const statement = `mutation DeleteVehicle($input: DeleteVehicleInput!) {
        deleteVehicle(input: $input) {
          __typename
          id
          name
          description
          location
          status
          battery
          provider {
            __typename
            id
            name
            description
            vehicles {
              __typename
              nextToken
            }
          }
          trips {
            __typename
            items {
              __typename
              id
              cost
              startCoords
              endCoords
              startTime
              endTime
            }
            nextToken
          }
          type
          url
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteVehicleMutation>response.data.deleteVehicle;
  }
  async CreateProvider(
    input: CreateProviderInput
  ): Promise<CreateProviderMutation> {
    const statement = `mutation CreateProvider($input: CreateProviderInput!) {
        createProvider(input: $input) {
          __typename
          id
          name
          description
          vehicles {
            __typename
            items {
              __typename
              id
              name
              description
              location
              status
              battery
              type
              url
            }
            nextToken
          }
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateProviderMutation>response.data.createProvider;
  }
  async UpdateProvider(
    input: UpdateProviderInput
  ): Promise<UpdateProviderMutation> {
    const statement = `mutation UpdateProvider($input: UpdateProviderInput!) {
        updateProvider(input: $input) {
          __typename
          id
          name
          description
          vehicles {
            __typename
            items {
              __typename
              id
              name
              description
              location
              status
              battery
              type
              url
            }
            nextToken
          }
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateProviderMutation>response.data.updateProvider;
  }
  async DeleteProvider(
    input: DeleteProviderInput
  ): Promise<DeleteProviderMutation> {
    const statement = `mutation DeleteProvider($input: DeleteProviderInput!) {
        deleteProvider(input: $input) {
          __typename
          id
          name
          description
          vehicles {
            __typename
            items {
              __typename
              id
              name
              description
              location
              status
              battery
              type
              url
            }
            nextToken
          }
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteProviderMutation>response.data.deleteProvider;
  }
  async CreateUser(input: CreateUserInput): Promise<CreateUserMutation> {
    const statement = `mutation CreateUser($input: CreateUserInput!) {
        createUser(input: $input) {
          __typename
          id
          name
          email
          trips {
            __typename
            items {
              __typename
              id
              cost
              startCoords
              endCoords
              startTime
              endTime
            }
            nextToken
          }
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateUserMutation>response.data.createUser;
  }
  async UpdateUser(input: UpdateUserInput): Promise<UpdateUserMutation> {
    const statement = `mutation UpdateUser($input: UpdateUserInput!) {
        updateUser(input: $input) {
          __typename
          id
          name
          email
          trips {
            __typename
            items {
              __typename
              id
              cost
              startCoords
              endCoords
              startTime
              endTime
            }
            nextToken
          }
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateUserMutation>response.data.updateUser;
  }
  async DeleteUser(input: DeleteUserInput): Promise<DeleteUserMutation> {
    const statement = `mutation DeleteUser($input: DeleteUserInput!) {
        deleteUser(input: $input) {
          __typename
          id
          name
          email
          trips {
            __typename
            items {
              __typename
              id
              cost
              startCoords
              endCoords
              startTime
              endTime
            }
            nextToken
          }
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteUserMutation>response.data.deleteUser;
  }
  async CreateTrip(input: CreateTripInput): Promise<CreateTripMutation> {
    const statement = `mutation CreateTrip($input: CreateTripInput!) {
        createTrip(input: $input) {
          __typename
          id
          user {
            __typename
            id
            name
            email
            trips {
              __typename
              nextToken
            }
          }
          vehicle {
            __typename
            id
            name
            description
            location
            status
            battery
            provider {
              __typename
              id
              name
              description
            }
            trips {
              __typename
              nextToken
            }
            type
            url
          }
          cost
          startCoords
          endCoords
          startTime
          endTime
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateTripMutation>response.data.createTrip;
  }
  async UpdateTrip(input: UpdateTripInput): Promise<UpdateTripMutation> {
    const statement = `mutation UpdateTrip($input: UpdateTripInput!) {
        updateTrip(input: $input) {
          __typename
          id
          user {
            __typename
            id
            name
            email
            trips {
              __typename
              nextToken
            }
          }
          vehicle {
            __typename
            id
            name
            description
            location
            status
            battery
            provider {
              __typename
              id
              name
              description
            }
            trips {
              __typename
              nextToken
            }
            type
            url
          }
          cost
          startCoords
          endCoords
          startTime
          endTime
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateTripMutation>response.data.updateTrip;
  }
  async DeleteTrip(input: DeleteTripInput): Promise<DeleteTripMutation> {
    const statement = `mutation DeleteTrip($input: DeleteTripInput!) {
        deleteTrip(input: $input) {
          __typename
          id
          user {
            __typename
            id
            name
            email
            trips {
              __typename
              nextToken
            }
          }
          vehicle {
            __typename
            id
            name
            description
            location
            status
            battery
            provider {
              __typename
              id
              name
              description
            }
            trips {
              __typename
              nextToken
            }
            type
            url
          }
          cost
          startCoords
          endCoords
          startTime
          endTime
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteTripMutation>response.data.deleteTrip;
  }
  async GetVehicle(id: string): Promise<GetVehicleQuery> {
    const statement = `query GetVehicle($id: ID!) {
        getVehicle(id: $id) {
          __typename
          id
          name
          description
          location
          status
          battery
          provider {
            __typename
            id
            name
            description
            vehicles {
              __typename
              nextToken
            }
          }
          trips {
            __typename
            items {
              __typename
              id
              cost
              startCoords
              endCoords
              startTime
              endTime
            }
            nextToken
          }
          type
          url
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetVehicleQuery>response.data.getVehicle;
  }
  async ListVehicles(
    filter?: ModelVehicleFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListVehiclesQuery> {
    const statement = `query ListVehicles($filter: ModelVehicleFilterInput, $limit: Int, $nextToken: String) {
        listVehicles(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            name
            description
            location
            status
            battery
            provider {
              __typename
              id
              name
              description
            }
            trips {
              __typename
              nextToken
            }
            type
            url
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListVehiclesQuery>response.data.listVehicles;
  }
  async GetProvider(id: string): Promise<GetProviderQuery> {
    const statement = `query GetProvider($id: ID!) {
        getProvider(id: $id) {
          __typename
          id
          name
          description
          vehicles {
            __typename
            items {
              __typename
              id
              name
              description
              location
              status
              battery
              type
              url
            }
            nextToken
          }
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetProviderQuery>response.data.getProvider;
  }
  async ListProviders(
    filter?: ModelProviderFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListProvidersQuery> {
    const statement = `query ListProviders($filter: ModelProviderFilterInput, $limit: Int, $nextToken: String) {
        listProviders(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            name
            description
            vehicles {
              __typename
              nextToken
            }
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListProvidersQuery>response.data.listProviders;
  }
  async GetUser(id: string): Promise<GetUserQuery> {
    const statement = `query GetUser($id: ID!) {
        getUser(id: $id) {
          __typename
          id
          name
          email
          trips {
            __typename
            items {
              __typename
              id
              cost
              startCoords
              endCoords
              startTime
              endTime
            }
            nextToken
          }
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetUserQuery>response.data.getUser;
  }
  async ListUsers(
    filter?: ModelUserFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListUsersQuery> {
    const statement = `query ListUsers($filter: ModelUserFilterInput, $limit: Int, $nextToken: String) {
        listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            name
            email
            trips {
              __typename
              nextToken
            }
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListUsersQuery>response.data.listUsers;
  }
  async GetTrip(id: string): Promise<GetTripQuery> {
    const statement = `query GetTrip($id: ID!) {
        getTrip(id: $id) {
          __typename
          id
          user {
            __typename
            id
            name
            email
            trips {
              __typename
              nextToken
            }
          }
          vehicle {
            __typename
            id
            name
            description
            location
            status
            battery
            provider {
              __typename
              id
              name
              description
            }
            trips {
              __typename
              nextToken
            }
            type
            url
          }
          cost
          startCoords
          endCoords
          startTime
          endTime
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetTripQuery>response.data.getTrip;
  }
  async ListTrips(
    filter?: ModelTripFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListTripsQuery> {
    const statement = `query ListTrips($filter: ModelTripFilterInput, $limit: Int, $nextToken: String) {
        listTrips(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            user {
              __typename
              id
              name
              email
            }
            vehicle {
              __typename
              id
              name
              description
              location
              status
              battery
              type
              url
            }
            cost
            startCoords
            endCoords
            startTime
            endTime
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListTripsQuery>response.data.listTrips;
  }
  async UserByEmail(
    email?: string,
    filter?: ModelUserFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<UserByEmailQuery> {
    const statement = `query UserByEmail($email: String, $filter: ModelUserFilterInput, $limit: Int, $nextToken: String) {
        userByEmail(email: $email, filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            name
            email
            trips {
              items {
                __typename
                id
                cost
                startCoords
                endCoords
                startTime
                endTime
              }
              __typename
              nextToken
            }
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (email) {
      gqlAPIServiceArguments.email = email;
    }
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UserByEmailQuery>response.data.userByEmail;
  }
  OnCreateVehicleListener: Observable<
    OnCreateVehicleSubscription
  > = API.graphql(
    graphqlOperation(
      `subscription OnCreateVehicle {
        onCreateVehicle {
          __typename
          id
          name
          description
          location
          status
          battery
          provider {
            __typename
            id
            name
            description
            vehicles {
              __typename
              nextToken
            }
          }
          trips {
            __typename
            items {
              __typename
              id
              cost
              startCoords
              endCoords
              startTime
              endTime
            }
            nextToken
          }
          type
          url
        }
      }`
    )
  ) as Observable<OnCreateVehicleSubscription>;

  OnUpdateVehicleListener: Observable<
    OnUpdateVehicleSubscription
  > = API.graphql(
    graphqlOperation(
      `subscription OnUpdateVehicle {
        onUpdateVehicle {
          __typename
          id
          name
          description
          location
          status
          battery
          provider {
            __typename
            id
            name
            description
            vehicles {
              __typename
              nextToken
            }
          }
          trips {
            __typename
            items {
              __typename
              id
              cost
              startCoords
              endCoords
              startTime
              endTime
            }
            nextToken
          }
          type
          url
        }
      }`
    )
  ) as Observable<OnUpdateVehicleSubscription>;

  OnDeleteVehicleListener: Observable<
    OnDeleteVehicleSubscription
  > = API.graphql(
    graphqlOperation(
      `subscription OnDeleteVehicle {
        onDeleteVehicle {
          __typename
          id
          name
          description
          location
          status
          battery
          provider {
            __typename
            id
            name
            description
            vehicles {
              __typename
              nextToken
            }
          }
          trips {
            __typename
            items {
              __typename
              id
              cost
              startCoords
              endCoords
              startTime
              endTime
            }
            nextToken
          }
          type
          url
        }
      }`
    )
  ) as Observable<OnDeleteVehicleSubscription>;

  OnCreateProviderListener: Observable<
    OnCreateProviderSubscription
  > = API.graphql(
    graphqlOperation(
      `subscription OnCreateProvider {
        onCreateProvider {
          __typename
          id
          name
          description
          vehicles {
            __typename
            items {
              __typename
              id
              name
              description
              location
              status
              battery
              type
              url
            }
            nextToken
          }
        }
      }`
    )
  ) as Observable<OnCreateProviderSubscription>;

  OnUpdateProviderListener: Observable<
    OnUpdateProviderSubscription
  > = API.graphql(
    graphqlOperation(
      `subscription OnUpdateProvider {
        onUpdateProvider {
          __typename
          id
          name
          description
          vehicles {
            __typename
            items {
              __typename
              id
              name
              description
              location
              status
              battery
              type
              url
            }
            nextToken
          }
        }
      }`
    )
  ) as Observable<OnUpdateProviderSubscription>;

  OnDeleteProviderListener: Observable<
    OnDeleteProviderSubscription
  > = API.graphql(
    graphqlOperation(
      `subscription OnDeleteProvider {
        onDeleteProvider {
          __typename
          id
          name
          description
          vehicles {
            __typename
            items {
              __typename
              id
              name
              description
              location
              status
              battery
              type
              url
            }
            nextToken
          }
        }
      }`
    )
  ) as Observable<OnDeleteProviderSubscription>;

  OnCreateUserListener: Observable<OnCreateUserSubscription> = API.graphql(
    graphqlOperation(
      `subscription OnCreateUser {
        onCreateUser {
          __typename
          id
          name
          email
          trips {
            __typename
            items {
              __typename
              id
              cost
              startCoords
              endCoords
              startTime
              endTime
            }
            nextToken
          }
        }
      }`
    )
  ) as Observable<OnCreateUserSubscription>;

  OnUpdateUserListener: Observable<OnUpdateUserSubscription> = API.graphql(
    graphqlOperation(
      `subscription OnUpdateUser {
        onUpdateUser {
          __typename
          id
          name
          email
          trips {
            __typename
            items {
              __typename
              id
              cost
              startCoords
              endCoords
              startTime
              endTime
            }
            nextToken
          }
        }
      }`
    )
  ) as Observable<OnUpdateUserSubscription>;

  OnDeleteUserListener: Observable<OnDeleteUserSubscription> = API.graphql(
    graphqlOperation(
      `subscription OnDeleteUser {
        onDeleteUser {
          __typename
          id
          name
          email
          trips {
            __typename
            items {
              __typename
              id
              cost
              startCoords
              endCoords
              startTime
              endTime
            }
            nextToken
          }
        }
      }`
    )
  ) as Observable<OnDeleteUserSubscription>;

  OnCreateTripListener: Observable<OnCreateTripSubscription> = API.graphql(
    graphqlOperation(
      `subscription OnCreateTrip {
        onCreateTrip {
          __typename
          id
          user {
            __typename
            id
            name
            email
            trips {
              __typename
              nextToken
            }
          }
          vehicle {
            __typename
            id
            name
            description
            location
            status
            battery
            provider {
              __typename
              id
              name
              description
            }
            trips {
              __typename
              nextToken
            }
            type
            url
          }
          cost
          startCoords
          endCoords
          startTime
          endTime
        }
      }`
    )
  ) as Observable<OnCreateTripSubscription>;

  OnUpdateTripListener: Observable<OnUpdateTripSubscription> = API.graphql(
    graphqlOperation(
      `subscription OnUpdateTrip {
        onUpdateTrip {
          __typename
          id
          user {
            __typename
            id
            name
            email
            trips {
              __typename
              nextToken
            }
          }
          vehicle {
            __typename
            id
            name
            description
            location
            status
            battery
            provider {
              __typename
              id
              name
              description
            }
            trips {
              __typename
              nextToken
            }
            type
            url
          }
          cost
          startCoords
          endCoords
          startTime
          endTime
        }
      }`
    )
  ) as Observable<OnUpdateTripSubscription>;

  OnDeleteTripListener: Observable<OnDeleteTripSubscription> = API.graphql(
    graphqlOperation(
      `subscription OnDeleteTrip {
        onDeleteTrip {
          __typename
          id
          user {
            __typename
            id
            name
            email
            trips {
              __typename
              nextToken
            }
          }
          vehicle {
            __typename
            id
            name
            description
            location
            status
            battery
            provider {
              __typename
              id
              name
              description
            }
            trips {
              __typename
              nextToken
            }
            type
            url
          }
          cost
          startCoords
          endCoords
          startTime
          endTime
        }
      }`
    )
  ) as Observable<OnDeleteTripSubscription>;
}
