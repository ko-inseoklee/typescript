import { FC } from 'react';

type GreetingsProps = {
    name: string,
    mark?: string
    onClick: () => void
}

const Greetings: FC<GreetingsProps> = ({name, mark, onClick}) => (      // ? Props 타입은 제네릭 타입으로 가져올 수 있다.

    

    <div>Hello, {name} {mark}
        <div>
            <button onClick={onClick}>Click me</button>
        </div>
    </div>
);

Greetings.defaultProps = {
    mark: "s"
};

export default Greetings;