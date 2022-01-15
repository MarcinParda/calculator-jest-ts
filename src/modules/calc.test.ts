import Calc, {CalcInput, InputType, Operation, OperatorType} from "modules/calc";

test('generates operations', () => {
    const inputs: Array<CalcInput> = [
        {type: InputType.Numerical, value: 1},
        {type: InputType.Numerical, value: 2},
        {type: InputType.Operator, operator: OperatorType.Add},
        {type: InputType.Numerical, value: 3},
        {type: InputType.Operator, operator: OperatorType.Equals},
    ];

    const operations: Array<Operation> = [
        { operator: OperatorType.Add, value: 12},
        { operator: OperatorType.Add, value: 3 },
        { operator: OperatorType.Equals, value: 0 }
    ]
    expect(Calc.getOperations(inputs)).toEqual(operations);
})
