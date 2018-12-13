import React from "react";
import { mount } from "enzyme";
import LiveList from "../src/components/LiveList";

describe("LiveList", () => {
  let props;
  let mountedLiveList;

  const LiveList = () => {
    if (!mountedLiveList) {
      mountedLiveList = mount(
        <LiveList {...props} />
      );
    }
    return mountedLiveList;
  }

  beforeEach(() => {
    mountedLiveList = undefined;
  });

  it("always renders a List", () => {
    const list = LiveList().find("List");
    expect(list.length).toBeGreaterThan(0);
  });

  it("always renders ListItems", () => {
    const list = LiveList().find("List");
    const item = list.first();
    expect(item.length).toBeGreaterThan(0);
    expect(item.children()).toEqual(LiveList().children());
  });
});

