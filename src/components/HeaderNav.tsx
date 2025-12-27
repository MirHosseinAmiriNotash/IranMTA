import { Tabs, rem } from "@mantine/core";
import {
  IconHomeFilled,
  IconBasketFilled,
  IconSettingsFilled,
  IconTrophyFilled,
  IconHelpHexagonFilled,
  IconHexagonLetterBFilled,
} from "@tabler/icons-react";

export function HeaderNav() {
  const iconStyle = { width: rem(18), height: rem(18) };

  return (
    <Tabs
      variant="unstyled"
      defaultValue="main"
      classNames={{
        root: "mta-tabs-root",
        list: "mta-tabs-list",
        tab: "mta-tabs-tab",
      }}
    >
      <Tabs.List justify="center" style={{ gap: "25px", border: "none" }}>
        <Tabs.Tab
          value="main"
          leftSection={<IconHomeFilled style={iconStyle} />}
        >
          MAIN
        </Tabs.Tab>
        <Tabs.Tab
          value="shop"
          leftSection={<IconBasketFilled style={iconStyle} />}
        >
          SHOP
        </Tabs.Tab>
        <Tabs.Tab
          value="settings"
          leftSection={<IconSettingsFilled style={iconStyle} />}
        >
          SETTINGS
        </Tabs.Tab>
        <Tabs.Tab
          value="challenges"
          leftSection={<IconTrophyFilled style={iconStyle} />}
        >
          CHALLENGES
        </Tabs.Tab>
        <Tabs.Tab
          value="faq"
          leftSection={<IconHelpHexagonFilled style={iconStyle} />}
        >
          FAQ
        </Tabs.Tab>
        <Tabs.Tab
        className="battlepass"
          value="battlepass"

          leftSection={<IconHexagonLetterBFilled style={iconStyle} />}
        >
          BATTLE PASS
        </Tabs.Tab>
      </Tabs.List>
    </Tabs>
  );
}

export default HeaderNav;
