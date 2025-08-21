import { describe, it, expect } from "vitest";
import {
  HOME_CRUMB,
  withHomeCrumb,
  getSectionCrumb,
  buildBreadcrumbs
} from "./breadcrumbs";

describe("breadcrumbs utils", () => {
  it("withHomeCrumb prepends HOME_CRUMB", () => {
    const items = [{ title: "Test", href: "/test" }];
    expect(withHomeCrumb(items)).toEqual([HOME_CRUMB, ...items]);
  });

  it("getSectionCrumb returns section for section path", () => {
    expect(getSectionCrumb("/operacija-i-lecheie")).toMatchObject({
      title: "Операция и лечение"
    });
    expect(getSectionCrumb("/zhizn-posle-remissija")).toMatchObject({
      title: "Жизнь после и ремиссия"
    });
    expect(getSectionCrumb("/postanovka-diagnoza")).toMatchObject({
      title: "Постановка диагноза"
    });
  });

  it("getSectionCrumb returns section for tpost slug", () => {
    expect(getSectionCrumb("/tpost/1zmcu8rz21-vipadenie-volos")).toMatchObject({
      title: "Жизнь после и ремиссия"
    });
    expect(getSectionCrumb("/tpost/ee7m50sju1-protokol-lecheniya")).toMatchObject({
      title: "Операция и лечение"
    });
    expect(getSectionCrumb("/tpost/dg58cuu7t1-chto-takoe-rak")).toMatchObject({
      title: "Постановка диагноза"
    });
  });

  it("getSectionCrumb returns undefined for unknown slug", () => {
    expect(getSectionCrumb("/tpost/unknown-slug")).toBeUndefined();
  });

  it("buildBreadcrumbs for section page", () => {
    const result = buildBreadcrumbs({
      pathname: "/operacija-i-lecheie",
      pageTitle: "Операция и лечение"
    });
    expect(result).toEqual([
      HOME_CRUMB,
      { title: "Операция и лечение", href: "/operacija-i-lecheie" },
      { title: "Операция и лечение", href: "/#" }
    ]);
  });

  it("buildBreadcrumbs for tpost article", () => {
    const result = buildBreadcrumbs({
      pathname: "/tpost/1zmcu8rz21-vipadenie-volos",
      pageTitle: "Выпадение волос"
    });
    expect(result).toEqual([
      HOME_CRUMB,
      { title: "Жизнь после и ремиссия", href: "/zhizn-posle-remissija" },
      { title: "Выпадение волос", href: "/#" }
    ]);
  });

  it("buildBreadcrumbs for unknown tpost slug", () => {
    const result = buildBreadcrumbs({
      pathname: "/tpost/unknown-slug",
      pageTitle: "Unknown"
    });
    expect(result).toEqual([
      HOME_CRUMB,
      { title: "Unknown", href: "/#" }
    ]);
  });
});