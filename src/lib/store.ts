import type {Zh} from "./types";
import {isDevice, isEndpoint, isGroup} from "./utils";

let store = new Map();

function getEntityKey(entity: Zh.Endpoint | Zh.Group | Zh.Device) {
    if (isGroup(entity)) {
        return entity.groupID;
    }
    if (isEndpoint(entity)) {
        return `${entity.deviceIeeeAddress}_${entity.ID}`;
    }
    if (isDevice(entity)) {
        return `${entity.ieeeAddr}`;
    }
    throw new Error("Invalid entity type");
}

export function hasValue(entity: Zh.Endpoint | Zh.Group | Zh.Device, key: string) {
    const entityKey = getEntityKey(entity);
    return store.has(entityKey) && store.get(entityKey)[key] !== undefined;
}

export function getValue(entity: Zh.Endpoint | Zh.Group | Zh.Device, key: string, default_: unknown = undefined) {
    const entityKey = getEntityKey(entity);
    if (store.has(entityKey) && store.get(entityKey)[key] !== undefined) {
        return store.get(entityKey)[key];
    }

    return default_;
}

export function putValue(entity: Zh.Endpoint | Zh.Group | Zh.Device, key: string, value: unknown) {
    const entityKey = getEntityKey(entity);
    if (!store.has(entityKey)) {
        store.set(entityKey, {});
    }

    store.get(entityKey)[key] = value;
}

export function clearValue(entity: Zh.Endpoint | Zh.Group | Zh.Device, key: string) {
    if (hasValue(entity, key)) {
        const entityKey = getEntityKey(entity);
        delete store.get(entityKey)[key];
    }
}

export function clear() {
    store = new Map();
}
