import { MemberEntity } from './github.vm';
import { getMemberCollection } from './api/github.api';
import { mapMemberEntityListToVM } from './github.mappers';

export const getMemberVMCollection = (company: string): Promise<MemberEntity[]> => {
    return getMemberCollection(company).then(mapMemberEntityListToVM);
};
