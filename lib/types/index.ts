


export interface ChildFormRef {
    validateAndGetData: () => Promise<{
        isValid: boolean;
        values: any;
        errors: any;
    }>;
}



