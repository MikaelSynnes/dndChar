import { State, Selector } from "@ngxs/store";
import { ServerStateModel } from "src/state/server-state/serverStateModel";

@State<ServerStateModel>({
    name: 'ServerState',
    defaults: {
      readonly:  true,
      appUserId: "1234567890123456"
    }
})
export class ServerState {

    @Selector()
    static getAll(state: ServerState) {
        return state;
    }

    @Selector()
    static getAppUserId(state: ServerStateModel) {
        return state.appUserId;
    }

}