﻿namespace SereneInventory.Setup {
    export interface ProductCategoryRow {
        Id?: number;
        Name?: string;
        Description?: string;
        TenantId?: number;
        Remarks?: string;
        IUser?: string;
        EUser?: string;
        RowNum?: number;
        IDate?: string;
        EDate?: string;
    }

    export namespace ProductCategoryRow {
        export const idProperty = 'Id';
        export const nameProperty = 'Name';
        export const localTextPrefix = 'Setup.ProductCategory';

        export declare const enum Fields {
            Id = "Id",
            Name = "Name",
            Description = "Description",
            TenantId = "TenantId",
            Remarks = "Remarks",
            IUser = "IUser",
            EUser = "EUser",
            RowNum = "RowNum",
            IDate = "IDate",
            EDate = "EDate"
        }
    }
}

