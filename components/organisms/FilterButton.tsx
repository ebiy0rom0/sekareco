import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import { Icon, ICON_FILTER } from "~/components/atoms/Icon.tsx";
import { MusicFilter, Props as MusicFilterProps } from "~/components/organisms/MusicFilter.tsx";
import { RecordFilter } from "~/components/organisms/RecordFilter.tsx";
// import { MusicFilterState, MusicFilterActions } from "~/hooks/useMusicFilter.tsx";
import { ThemeConsumer } from "~/hooks/useTheme.tsx";

export const FilterButton: React.FC<Props> = ({musicFilterProps}) => (
  <ThemeConsumer>
    {({ darkMode }) => (
      <Popover className="relative lg:hidden">
        <Popover.Button className="flex gap-1 outline-0 font-bold">
          filter <Icon icon={ICON_FILTER} />
        </Popover.Button>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-200"
          enterFrom="transform opacity-0 scale-85"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-150"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-85"
        >
          <Popover.Panel
            className={`absolute rounded-lg border-2 w-60 mt-1 px-3 right-0 shadow-2xl divide-y ${
              darkMode
                ? "bg-slate-800 shadow-slate-400/30 border-gray-700 divide-gray-700"
                : "bg-slate-100"
            }`}
          >
            <MusicFilter
              levelRange={musicFilterProps.levelRange}
              artists={musicFilterProps.artists}
              filter={musicFilterProps.filter}
              dispatch={musicFilterProps.dispatch}
            />
            <RecordFilter handler={(s: string)=>undefined} isChecked={(n: number)=> true} />
          </Popover.Panel>
        </Transition>
      </Popover>
    )}
  </ThemeConsumer>
)

type Props = {
  musicFilterProps: MusicFilterProps
}