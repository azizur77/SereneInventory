﻿
namespace SereneInventory.Setup.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Setup.Product")]
    [BasedOnRow(typeof(Entities.ProductRow), CheckNames = true)]
    public class ProductColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int64 Id { get; set; }
        [EditLink]
        public String Name { get; set; }
        public Int32 ProductType { get; set; }
        public Int64 ProductCategoryId { get; set; }
        public String Description { get; set; }
        public String Images { get; set; }
        public Int64 TenantId { get; set; }
    }
}