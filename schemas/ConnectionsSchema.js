import { gql } from "apollo-server-express";

export default gql`
  type Connections {
    id: ID
    Quantity: Number
    ConnectionTypeID: ConnectionType
    CurrentTypeID: CurrentType
    LevelID: Level
  }
`;
