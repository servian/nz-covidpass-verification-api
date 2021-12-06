import {
  ValidatorConstraint,
  ValidatorConstraintInterface,
  ValidationArguments,
} from 'class-validator';

@ValidatorConstraint({ name: 'PayloadValidator', async: false })
export class PayloadValidator implements ValidatorConstraintInterface {
  validate(payload: string, args: ValidationArguments) {
    const regex = /^NZCP:\/1\/[A-Z2-7]+=*$/g;
    const base32Regex = /^[A-Z2-7]+=*$/;

    return regex.test(payload) && base32Regex.test(payload.split('/')[2]);
  }

  defaultMessage(args: ValidationArguments) {
    return 'payload should match the pattern: NZCP:/{version}/{base32-encoded-string}';
  }
}
