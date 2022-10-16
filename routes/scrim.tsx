import { ThemeConsumer } from "~/hooks/useTheme.tsx";

const Scrim: React.FC = () => {
  return (
    <ThemeConsumer>
      {({ darkMode }) => (
        <div className="flex flex-col">
          <div
            className={`flex justify-between pb-4 pt-4 border-b ${
              darkMode ? "border-gray-700" : "border-gray-200"
            }`}
          >
            <h2 className="text-3xl font-semibold tracking-widest first-letter:text-4xl">
              スクリム
            </h2>
          </div>
          <div className="flex items-center self-center h-50vh">
            Coming soon...
          </div>
        </div>
      )}
    </ThemeConsumer>
  );
};

export default Scrim;
