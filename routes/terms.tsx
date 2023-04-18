import { FC } from "react";
import { useI18n } from "~/hooks/useI18n.ts";
import { useTheme } from "~/hooks/useTheme.tsx";

const Terms: FC = () => {
  const { t } = useI18n();
  const { dark } = useTheme();


  return (
    <div className="grid w-auto">
      <div
        className={`pb-4 pt-4 border-b ${dark ? "border-gray-700" : "border-gray-200"}`}
      >
        <h2 className="text-3xl font-semibold tracking-widest first-letter:text-4xl">
          {t.TERMS}
        </h2>
      </div>
      <div className="flex items-center place-self-center h-50vh">
        Coming soon...
      </div>
    </div>
  );
};

export default Terms;
