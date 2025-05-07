interface ButtonProps { //buttonに渡すpropsを作成
    onClick: React.MouseEventHandler<HTMLButtonElement>;
    children: React.ReactNode; //buttonの中に子要素を入れてあげるようにする
  }
  
  const Button = ({ onClick, children }: ButtonProps) => (
    <button
    onClick={onClick}
    className="bg-blue-500 text-white font-semibold w-12 h-12 rounded-full:bg-gray-600 transition-colors duration-200"
    >{/*y軸方向に2単位の移動, 200ミリ秒での変化 */}
      {children}
    </button>
  );
  
  export default Button;