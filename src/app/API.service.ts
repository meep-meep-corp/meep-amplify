/* tslint:disable */
//  This file was automatically generated and should not be edited.
import { Injectable } from "@angular/core";
import API, { graphqlOperation } from "@aws-amplify/api";
import { GraphQLResult } from "@aws-amplify/api/lib/types";
import * as Observable from "zen-observable";

export type CreateVehiculesInput = {
  id?: string | null;
  name: string;
  description?: string | null;
  location?: string | null;
};

export type UpdateVehiculesInput = {
  id: string;
  name?: string | null;
  description?: string | null;
  location?: string | null;
};

export type DeleteVehiculesInput = {
  id?: string | null;
};

export type CreateProvidersInput = {
  id?: string | null;
  name: string;
  description?: string | null;
};

export type UpdateProvidersInput = {
  id: string;
  name?: string | null;
  description?: string | null;
};

export type DeleteProvidersInput = {
  id?: string | null;
};

export type ModelVehiculesFilterInput = {
  id?: ModelIDFilterInput | null;
  name?: ModelStringFilterInput | null;
  description?: ModelStringFilterInput | null;
  location?: ModelStringFilterInput | null;
  and?: Array<ModelVehiculesFilterInput | null> | null;
  or?: Array<ModelVehiculesFilterInput | null> | null;
  not?: ModelVehiculesFilterInput | null;
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

export type ModelProvidersFilterInput = {
  id?: ModelIDFilterInput | null;
  name?: ModelStringFilterInput | null;
  description?: ModelStringFilterInput | null;
  and?: Array<ModelProvidersFilterInput | null> | null;
  or?: Array<ModelProvidersFilterInput | null> | null;
  not?: ModelProvidersFilterInput | null;
};

export type CreateVehiculesMutation = {
  __typename: "Vehicules";
  id: string;
  name: string;
  description: string | null;
  location: string | null;
};

export type UpdateVehiculesMutation = {
  __typename: "Vehicules";
  id: string;
  name: string;
  description: string | null;
  location: string | null;
};

export type DeleteVehiculesMutation = {
  __typename: "Vehicules";
  id: string;
  name: string;
  description: string | null;
  location: string | null;
};

export type CreateProvidersMutation = {
  __typename: "Providers";
  id: string;
  name: string;
  description: string | null;
};

export type UpdateProvidersMutation = {
  __typename: "Providers";
  id: string;
  name: string;
  description: string | null;
};

export type DeleteProvidersMutation = {
  __typename: "Providers";
  id: string;
  name: string;
  description: string | null;
};

export type GetVehiculesQuery = {
  __typename: "Vehicules";
  id: string;
  name: string;
  description: string | null;
  location: string | null;
};

export type ListVehiculessQuery = {
  __typename: "ModelVehiculesConnection";
  items: Array<{
    __typename: "Vehicules";
    id: string;
    name: string;
    description: string | null;
    location: string | null;
  } | null> | null;
  nextToken: string | null;
};

export type GetProvidersQuery = {
  __typename: "Providers";
  id: string;
  name: string;
  description: string | null;
};

export type ListProviderssQuery = {
  __typename: "ModelProvidersConnection";
  items: Array<{
    __typename: "Providers";
    id: string;
    name: string;
    description: string | null;
  } | null> | null;
  nextToken: string | null;
};

export type OnCreateVehiculesSubscription = {
  __typename: "Vehicules";
  id: string;
  name: string;
  description: string | null;
  location: string | null;
};

export type OnUpdateVehiculesSubscription = {
  __typename: "Vehicules";
  id: string;
  name: string;
  description: string | null;
  location: string | null;
};

export type OnDeleteVehiculesSubscription = {
  __typename: "Vehicules";
  id: string;
  name: string;
  description: string | null;
  location: string | null;
};

export type OnCreateProvidersSubscription = {
  __typename: "Providers";
  id: string;
  name: string;
  description: string | null;
};

export type OnUpdateProvidersSubscription = {
  __typename: "Providers";
  id: string;
  name: string;
  description: string | null;
};

export type OnDeleteProvidersSubscription = {
  __typename: "Providers";
  id: string;
  name: string;
  description: string | null;
};

@Injectable({
  providedIn: "root"
})
export class APIService {
  async CreateVehicules(
    input: CreateVehiculesInput
  ): Promise<CreateVehiculesMutation> {
    const statement = `mutation CreateVehicules($input: CreateVehiculesInput!) {
        createVehicules(input: $input) {
          __typename
          id
          name
          description
          location
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateVehiculesMutation>response.data.createVehicules;
  }
  async UpdateVehicules(
    input: UpdateVehiculesInput
  ): Promise<UpdateVehiculesMutation> {
    const statement = `mutation UpdateVehicules($input: UpdateVehiculesInput!) {
        updateVehicules(input: $input) {
          __typename
          id
          name
          description
          location
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateVehiculesMutation>response.data.updateVehicules;
  }
  async DeleteVehicules(
    input: DeleteVehiculesInput
  ): Promise<DeleteVehiculesMutation> {
    const statement = `mutation DeleteVehicules($input: DeleteVehiculesInput!) {
        deleteVehicules(input: $input) {
          __typename
          id
          name
          description
          location
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteVehiculesMutation>response.data.deleteVehicules;
  }
  async CreateProviders(
    input: CreateProvidersInput
  ): Promise<CreateProvidersMutation> {
    const statement = `mutation CreateProviders($input: CreateProvidersInput!) {
        createProviders(input: $input) {
          __typename
          id
          name
          description
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateProvidersMutation>response.data.createProviders;
  }
  async UpdateProviders(
    input: UpdateProvidersInput
  ): Promise<UpdateProvidersMutation> {
    const statement = `mutation UpdateProviders($input: UpdateProvidersInput!) {
        updateProviders(input: $input) {
          __typename
          id
          name
          description
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateProvidersMutation>response.data.updateProviders;
  }
  async DeleteProviders(
    input: DeleteProvidersInput
  ): Promise<DeleteProvidersMutation> {
    const statement = `mutation DeleteProviders($input: DeleteProvidersInput!) {
        deleteProviders(input: $input) {
          __typename
          id
          name
          description
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteProvidersMutation>response.data.deleteProviders;
  }
  async GetVehicules(id: string): Promise<GetVehiculesQuery> {
    const statement = `query GetVehicules($id: ID!) {
        getVehicules(id: $id) {
          __typename
          id
          name
          description
          location
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetVehiculesQuery>response.data.getVehicules;
  }
  async ListVehiculess(
    filter?: ModelVehiculesFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListVehiculessQuery> {
    const statement = `query ListVehiculess($filter: ModelVehiculesFilterInput, $limit: Int, $nextToken: String) {
        listVehiculess(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            name
            description
            location
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
    return <ListVehiculessQuery>response.data.listVehiculess;
  }
  async GetProviders(id: string): Promise<GetProvidersQuery> {
    const statement = `query GetProviders($id: ID!) {
        getProviders(id: $id) {
          __typename
          id
          name
          description
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetProvidersQuery>response.data.getProviders;
  }
  async ListProviderss(
    filter?: ModelProvidersFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListProviderssQuery> {
    const statement = `query ListProviderss($filter: ModelProvidersFilterInput, $limit: Int, $nextToken: String) {
        listProviderss(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            name
            description
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
    return <ListProviderssQuery>response.data.listProviderss;
  }
  OnCreateVehiculesListener: Observable<
    OnCreateVehiculesSubscription
  > = API.graphql(
    graphqlOperation(
      `subscription OnCreateVehicules {
        onCreateVehicules {
          __typename
          id
          name
          description
          location
        }
      }`
    )
  ) as Observable<OnCreateVehiculesSubscription>;

  OnUpdateVehiculesListener: Observable<
    OnUpdateVehiculesSubscription
  > = API.graphql(
    graphqlOperation(
      `subscription OnUpdateVehicules {
        onUpdateVehicules {
          __typename
          id
          name
          description
          location
        }
      }`
    )
  ) as Observable<OnUpdateVehiculesSubscription>;

  OnDeleteVehiculesListener: Observable<
    OnDeleteVehiculesSubscription
  > = API.graphql(
    graphqlOperation(
      `subscription OnDeleteVehicules {
        onDeleteVehicules {
          __typename
          id
          name
          description
          location
        }
      }`
    )
  ) as Observable<OnDeleteVehiculesSubscription>;

  OnCreateProvidersListener: Observable<
    OnCreateProvidersSubscription
  > = API.graphql(
    graphqlOperation(
      `subscription OnCreateProviders {
        onCreateProviders {
          __typename
          id
          name
          description
        }
      }`
    )
  ) as Observable<OnCreateProvidersSubscription>;

  OnUpdateProvidersListener: Observable<
    OnUpdateProvidersSubscription
  > = API.graphql(
    graphqlOperation(
      `subscription OnUpdateProviders {
        onUpdateProviders {
          __typename
          id
          name
          description
        }
      }`
    )
  ) as Observable<OnUpdateProvidersSubscription>;

  OnDeleteProvidersListener: Observable<
    OnDeleteProvidersSubscription
  > = API.graphql(
    graphqlOperation(
      `subscription OnDeleteProviders {
        onDeleteProviders {
          __typename
          id
          name
          description
        }
      }`
    )
  ) as Observable<OnDeleteProvidersSubscription>;
}
