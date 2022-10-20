import { ThemeConsumer } from "~/hooks/useTheme.tsx";

const Policy: React.FC = () => {
  return (
    <ThemeConsumer>
      {({ darkMode }) => (
        <div className="grid w-auto">
          <div
            className={`pb-4 pt-4 border-b ${darkMode ? "border-gray-700" : "border-gray-200"}`}
          >
            <h2 className="text-3xl font-semibold tracking-widest first-letter:text-4xl">
              プライバシーポリシー
            </h2>
          </div>
          <div className="flex items-center place-self-center h-50vh">
            Coming soon...
          </div>
        </div>
      )}
    </ThemeConsumer>
  );
};

export default Policy;
