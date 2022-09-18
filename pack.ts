import * as coda from "@codahq/packs-sdk";
import { ToWords } from 'to-words';

export const pack = coda.newPack();
pack.setVersion("1");

const toWords = new ToWords({
        localeCode: 'en-US',
        converterOptions: {
            currency: false,
            ignoreDecimal: false,
            ignoreZeroCurrency: false,
            doNotAddOnly: false,
        }
    }
);

const NumberParameter = coda.makeParameter({
    type: coda.ParameterType.Number,
    name: "number",
    description: "A number",
});

pack.addFormula({
    resultType: coda.ValueType.String,
    name: "NumberToWords",
    description: "Converts Numbers (including decimal points) into words.",
    parameters: [NumberParameter],
    examples: [{params: [210000], result: "Two Hundred Ten Thousand"}],
    execute: ([value]) => toWords.convert(value),
});
