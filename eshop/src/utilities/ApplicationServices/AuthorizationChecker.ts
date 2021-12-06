import { Action, HttpError } from 'routing-controllers';
import { Request, Response } from 'express';

export class CustomAuthorizationChecker {
	static async validate(action: Action, roles: any): Promise<boolean> {
		try {
			return true;
		} catch (_) {
			return false;
		}
	}
}
