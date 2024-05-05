import { createSignal } from "solid-js";
import { invoke } from "@tauri-apps/api";

export const [pid, setPid] = createSignal("");
export const [psize, setPsize] = createSignal(0);
export const [pmax, setPmax] = createSignal(0);
export const [lkey, setLkey] = createSignal("");
export const [skey, setSkey] = createSignal("");
export const [ltext, setLText] = createSignal("");
export const [stext, setSText] = createSignal("");
export const [b1n, setB1n] = createSignal("");
export const [b1l, setB1l] = createSignal("");
export const [b2n, setB2n] = createSignal("");
export const [b2l, setB2l] = createSignal("");
export const [details, setDetails] = createSignal("");
export const [state, setState] = createSignal("");
export const [isTime, setTime] = createSignal(false);

export const update = () => {
  invoke("update", {
    pid: pid(),
    psize: psize(),
    pmax: pmax(),
    lkey: lkey(),
    skey: skey(),
    ltext: ltext(),
    stext: stext(),
    b1n: b1n(),
    b1l: b1l(),
    b2n: b2n(),
    b2l: b2l(),
    details: details(),
    state: state(),
    isTime: isTime(),
  });
};
