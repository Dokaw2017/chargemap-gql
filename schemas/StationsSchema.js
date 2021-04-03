import { gql } from "apollo-server-express";

export default gql`
  type Stations {
    id: ID
    Title: String
    Town: String
    AddressLine1: String
    StateOrProvince: String
    Postalcode: String
    Location: Detail
    Connections: [Connections]
  }
`;
